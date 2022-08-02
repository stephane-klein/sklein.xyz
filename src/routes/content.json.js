export const GET = async () => {
    console.log('ici1');
    return {
        'body': {
            'posts': await Promise.all(
                Object.entries(import.meta.glob('./blog/*.md')).map(async ([path, resolver]) => {
                    console.log('aaa');
                    console.log(path);
                    const { metadata } = await resolver();
                    console.log(metadata);

                    return {
                        path: path.slice(0, -3) + '/',
                        metadata: metadata
                    }
                })
            ),
            'pages': await Promise.all(
                Object.entries(import.meta.glob('./garden/*.md')).map(async ([path, resolver]) => {
                    const { metadata } = await resolver();

                    return {
                        path: path.slice(0, -3) + '/',
                        metadata: metadata
                    }
                })
            )
        }
    }
};
