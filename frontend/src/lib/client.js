import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:"kj0ixyhb",
    dataset:"production",
    apiVersion:"2023-07-03",
    useCdn:true,
    token:'skKSKcFObAklnqZlddZo3HGD2jlIE8lzk8yxHb3lZQnssq7kfHqN5v95TSEoPVMZZHxSg0SvvRBpzU2d80v9TuJNFoiYzIu2IjBxmS9IOgnoUvV75vRscsbssqUhHDQ6NZL3syBVJEAy6TW71P99kXVlwi5N55CEDsq3q2cM3gqJrJEgREFF'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);




// skJl4rJzpYeBEvwUrSjzjDvmEyurPGKkU0YggKV5Fv1k34wXI16HaG8sONeLtgIDmcxdeABBMbL0SRArkHrU5TkHPWVRS0MCNPogHwGXE2YQAFeWERNOz38nSSX9Mo96W3p9ikETmcbtrRg9MwHGRVJoFCrAkbwFEmkbtYsN3GezgMtoDezY