import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    meta_value: Boolean
});

export interface Users {
    id: string;
    name: string;
    email: string;
    password: string;
    meta_value: boolean;
}