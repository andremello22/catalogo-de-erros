// db.tsx
import { openDB } from 'idb';

// Definir uma interface para os dados de erro
interface ErrorData {
  modelo: string;
  defeito: string;
  cod: string;
  descricao: string;
}
export const initDB = async () => {
  return openDB('ErrosDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('erros')) {
        db.createObjectStore('erros', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

// Atualizar a função addError para aceitar um parâmetro do tipo ErrorData
export const addError = async (errorData: ErrorData) => {
  const db = await initDB();
  await db.add('erros', errorData);
};


export const getItems = async () => {
  const db = await initDB();
  const tx = db.transaction('erros', 'readonly');
  const store = tx.objectStore('erros');
  const allItems = await store.getAll();
  await tx.done;
  return allItems;
};

export const deleteItem = async (id: number) => {
  const db = await initDB();
  const tx = db.transaction('erros', 'readwrite');
  const store = tx.objectStore('erros');
  await store.delete(id);
  await tx.done; 
  alert('item Excluído com sucesso');
};



