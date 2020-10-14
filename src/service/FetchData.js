export default class FetchData {

    getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => await this.getResource();

    getLaunches = async () => await this.getResource();

    getCompany = async () => await this.getResource();

}