class ImgHelper {
    static loadImg = (img: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error(`Failed to load image's URL: ${img}`));
            image.src = img;
        });
    }
    static getImgRatio = (img?: string): Promise<number | Error> => {
        if (!img) {
            throw new Error('Image URL is required');
        }
        return new Promise((resolve) => {
            const image = ImgHelper.loadImg(img);
            image.then((image: HTMLImageElement) => {
                resolve(image.height / image.width);
            });
        });
    }
}

export default ImgHelper;