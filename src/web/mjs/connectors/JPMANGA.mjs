import Connector from '../engine/Connector.mjs';
import Manga from '../engine/Manga.mjs';

export default class JPMANGA extends Connector {

    constructor() {
        super();
        super.id = 'jpmanga';
        super.label = 'JPMANGA';
        this.tags = ['manga', 'english'];
        this.url = '';
    }

    async _getMangaFromURI(uri) {
        throw new Error('Not implemented!');
    }

    async _getMangas() {
        throw new Error('Not implemented!');
    }

    async _getChapters(manga) {
        throw new Error('Not implemented!');
    }

    async _getPages(chapter) {
        throw new Error('Not implemented!');
    }
}