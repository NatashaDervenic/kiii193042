import { Schema, Model, model, Document } from 'mongoose';

export interface Event extends Document {
    id: string,
    name: string,
    location:string,
    duration: string,
    isPublic: boolean
}


const EventSchema: Schema = new Schema(
    {
        name: String,
        location: String,
        duration: String,
        isPublic: Boolean
    },
    {
        timestamps: true
    }
)

export class EventModel {
    private _model: Model<Event>;

    constructor() {
        this._model = model<Event>('Event', EventSchema);
    }

    get model(): Model<Event> {
        return this._model;
    }
}

export const eventModel = new EventModel();

