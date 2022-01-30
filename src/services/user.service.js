import {axiosService} from "./axios.service";
import baseUrl, {urls} from "../configs/urls";

export const userService = {
    getAll:() => axiosService.get(urls.users).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsById:(id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAlbumsById:(id) => axiosService.get(`${baseUrl}/albums?userId=${id}`).then(value => value.data),
    getPhotosByAlbumId:(albumId) => axiosService.get(`${baseUrl}/photos?albumId=${albumId}`).then(value => value.data)
}