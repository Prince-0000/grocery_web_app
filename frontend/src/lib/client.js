import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:"kj0ixyhb",
    dataset:"production",
    apiVersion:"2023-07-03",
    useCdn:true,
    token:process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);




// skJl4rJzpYeBEvwUrSjzjDvmEyurPGKkU0YggKV5Fv1k34wXI16HaG8sONeLtgIDmcxdeABBMbL0SRArkHrU5TkHPWVRS0MCNPogHwGXE2YQAFeWERNOz38nSSX9Mo96W3p9ikETmcbtrRg9MwHGRVJoFCrAkbwFEmkbtYsN3GezgMtoDezY