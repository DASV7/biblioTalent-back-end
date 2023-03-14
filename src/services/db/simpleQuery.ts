import * as db from "../../models/index"


export default class BaseService {

    /* Object orm */
    private db: any;

    constructor() {
        this.db = db
    }

    /**
     * Función para buscar un registro que coincida con la condición suministrada
     * @param name nombre del modelo
     * @param query consulta del registro
     * @returns objeto encontrado o objeto vacío
     */
    public async find(name: string, query: any) {
        return await this.db[name].findOne(query);
        // ToDo: Espacio para auditoria
    }

    /**
    * Función para registrar o crear en base de datos
    * @param name nombre del modelo
    * @param data datos a insertar
    * @returns respuesta de la operación
    */
    public async create(name: string, data: any) {
        return await this.db[name].create(data);
        // ToDo: Espacio para auditoria
    }

    /**
     * Función para actualizar un registro o arreglo de registros
     * @param name nombre del modelo
     * @param data datos a actualizar
     * @param query condición WHERE para actualizar
     * @returns respuesta de la operación
     */
    public async update(name: string, data: any, query: any) {
        if (data?.Id) delete data.Id;
        return await this.db[name].update(data, query);
        // ToDo: Espacio para auditoria
    }

    /**
     * Función en próximo desuso para eliminado físico de un registro
     * Por recomendación se opta por eliminado lógico con columna Deleted
     * @param name nombre del modelo
     * @param query condición para eliminar
     * @returns resultado de la operación
     */
    public async delete(name: string, query: any) {
        return await this.db[name].destroy(query);
        // ToDo: Espacio para auditoria
    }



}


