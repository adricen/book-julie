import frontMatter from 'front-matter';
import IProject from '@/typescript/IProject';
import markdownit from 'markdown-it'

const MDController = {
    /**
     * @description Get all markdown header in the portfolio folder
     * @returns {Promise<IProject[]>} - A promise that resolves to an array of IProject objects sorted
     */
    get mdAttributeList() {
        const markdownUrl = import.meta.glob('@/assets/portfolio/*.md');
        const fileAttributes: Promise<IProject>[] = [];
        for (const path in markdownUrl) {
            fileAttributes.push(
                new Promise((resolve) => {
                    fetch(path).then((response) => {
                        response.text()
                        .then((data) => {
                            const { attributes }  = frontMatter(data);
                            resolve(attributes as IProject)
                        });
                    });
                })
            )
        }
        return fileAttributes;
    },

    getMdContent: (slug: string): any => new Promise((resolve) => {
        // const markdownUrl = import.meta.glob(`@/assets/portfolio/*.md`);
        fetch(`/src/assets/portfolio/${slug}.md`)
            .then((response) => {
                response.text()
                    .then((data) => {
                        const md = markdownit();
                        const { body }  = frontMatter(data);
                        resolve(md.render(body))
                    });
            });
    }),

};

export default MDController;