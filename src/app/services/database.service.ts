import { Injectable } from "@angular/core";
import initSqlJs, { Database } from "sql.js";

@Injectable({
	providedIn: "root"
})
export class DatabaseService {
	private db: Database | null = null;
	private readonly DB_NAME = "aura_math_db";
	private readonly STORE_NAME = "sqlite_backup";

	async init(): Promise<Database> {
		if (this.db) return this.db;

		console.log("DatabaseService: Inizio inizializzazione...");
		try {
			const SQL = await initSqlJs({
				// Forziamo il caricamento del file corretto che abbiamo configurato negli assets
				locateFile: () => `assets/sql-wasm.wasm`
			});
			console.log("DatabaseService: SQL.js caricato");

			const savedDb = await this.loadFromIndexedDB();

			if (savedDb) {
				console.log("DatabaseService: Caricamento DB da IndexedDB");
				this.db = new SQL.Database(new Uint8Array(savedDb));
			} else {
				console.log("DatabaseService: Creazione nuovo DB");
				this.db = new SQL.Database();
				this.db.run(`
					CREATE TABLE IF NOT EXISTS reviews (
						id INTEGER PRIMARY KEY AUTOINCREMENT,
						text TEXT NOT NULL,
						author TEXT NOT NULL,
						role TEXT,
						stars INTEGER DEFAULT 5,
						created_at DATETIME DEFAULT CURRENT_TIMESTAMP
					);
				`);
				await this.saveToIndexedDB();
			}
			console.log("DatabaseService: Inizializzazione completata");
			return this.db;
		} catch (error) {
			console.error("DatabaseService: Errore inizializzazione:", error);
			throw error;
		}
	}

	async executeQuery(query: string, params?: any[]): Promise<any[]> {
		console.log("DatabaseService: Esecuzione query:", query, params);
		try {
			const db = await this.init();
			
			const isWriteQuery = query.toLowerCase().trim().startsWith("insert") || 
								query.toLowerCase().trim().startsWith("update") || 
								query.toLowerCase().trim().startsWith("delete");

			const result = db.exec(query, params);
			
			if (isWriteQuery) {
				console.log("DatabaseService: Query di scrittura, salvataggio...");
				await this.saveToIndexedDB();
			}

			if (result.length === 0) return [];
			
			const columns = result[0].columns;
			const values = result[0].values;
			
			const mapped = values.map(row => {
				const obj: any = {};
				columns.forEach((col, i) => {
					obj[col] = row[i];
				});
				return obj;
			});
			console.log("DatabaseService: Risultati query:", mapped.length);
			return mapped;
		} catch (error) {
			console.error("DatabaseService: Errore esecuzione query:", error);
			throw error;
		}
	}

	private async saveToIndexedDB(): Promise<void> {
		if (!this.db) return;
		const data = this.db.export();
		
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.DB_NAME, 1);
			
			request.onupgradeneeded = () => {
				request.result.createObjectStore(this.STORE_NAME);
			};
			
			request.onsuccess = () => {
				const db = request.result;
				const tx = db.transaction(this.STORE_NAME, "readwrite");
				const store = tx.objectStore(this.STORE_NAME);
				store.put(data, "backup");
				tx.oncomplete = () => resolve();
				tx.onerror = () => reject(tx.error);
			};
			
			request.onerror = () => reject(request.error);
		});
	}

	private async loadFromIndexedDB(): Promise<ArrayBuffer | null> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.DB_NAME, 1);
			
			request.onupgradeneeded = () => {
				request.result.createObjectStore(this.STORE_NAME);
			};
			
			request.onsuccess = () => {
				const db = request.result;
				if (!db.objectStoreNames.contains(this.STORE_NAME)) {
					resolve(null);
					return;
				}
				const tx = db.transaction(this.STORE_NAME, "readonly");
				const store = tx.objectStore(this.STORE_NAME);
				const getRequest = store.get("backup");
				
				getRequest.onsuccess = () => {
					resolve(getRequest.result || null);
				};
				
				getRequest.onerror = () => reject(getRequest.error);
			};
			
			request.onerror = () => resolve(null);
		});
	}
}
