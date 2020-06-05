let YTvideo1 = {
    title : 'Top 10 Anime',
    videoLength : 30,
    videoCreator : 'Harsh Khaiwal',
    videoDescription : 'this is a video description and a long one'

}
let YTvideo2 = {
    title : 'Top 10 TV Series',
    videoLength : 20,
    videoCreator : 'Harsh Khaiwal',
    videoDescription : 'this is a video description and a long one'

}
// console.log(YTvideo)
// console.log(`Hey new video on ${YTvideo.title} by ${YTvideo.videoCreator}`)
// YTvideo.title='Naruto Soundtarcks'
// console.log(YTvideo.title)

let changeVideoLength=function(myObject){
    // console.log(`Time of this video is : ${myObject.videoLength}`)
    // return `Time of this video is : ${myObject.videoLength+2}`
    return{
        format1 : `Time of this video is : ${myObject.videoLength+2}`,
        format2 : `Time of this video is : ${myObject.videoLength+5}`
    }
}
// console.log(changeVideoLength(YTvideo1))
// console.log(changeVideoLength(YTvideo2))

let add1 = changeVideoLength(YTvideo1)
console.log(add1.format1)