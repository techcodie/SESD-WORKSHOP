import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export default class BaseRepository<T extends Document> {
    constructor(protected model: Model<T>) { }

    async create(data: any) {
        return await this.model.create(data);
    }

    async find() {
        return await this.model.find().exec();
    }

    async findById(id: string) {
        return await this.model.findById(id).exec();
    }

    async update(id: string, data: any) {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string) {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
