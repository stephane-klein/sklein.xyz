export const GET = async () => {
    console.log('ici1');
    return {
        'body': {
            'posts': await Promise.all(
                Object.entries(import.meta.glob('./blog/*.md')).map(async ([path, resolver]) => {
                    const { frontmatter } = await resolver();

                    return {
                        path: path.slice(0, -3) + '/',
                        frontmatter: frontmatter
                    }
                })
            ),
            'pages': await Promise.all(
                Object.entries(import.meta.glob('./garden/*.md')).map(async ([path, resolver]) => {
                    const { frontmatter } = await resolver();

                    return {
                        path: path.slice(0, -3) + '/',
                        frontmatter: frontmatter
                    }
                })
            )
        }
    }
};
