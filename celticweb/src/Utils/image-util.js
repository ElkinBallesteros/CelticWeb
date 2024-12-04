function getImageUrl(basePath, imageName){
    return new URL(`${basePath}/${imageName}`, import.meta.url).href;
}

export {getImageUrl}