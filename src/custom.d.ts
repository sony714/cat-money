import { RecordItem } from '@/custom';
import { tagListModel } from '@/models/tagListModel';
import { createId } from '@/lib/createId';
type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string
}
type Tag = {
    id: string;
    name: string;
}
type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
type tagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

interface window {

}