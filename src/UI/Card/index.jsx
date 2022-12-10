import React,{useRef,useState} from 'react';
import "./style.css"
import star from "../../assets/img/star.svg";
import likeImg from "../../assets/img/yurak.svg";
import Auth from "../../API/auth/auth.jsx";

function index(obj, hover) {
    console.log(obj);
    const setLikeFunc=async(e)=>{
        const id=Number(e.target.id);
        console.log(e);
        const params={
            "product":id,
        }
        try{
            const res=await Auth.setLike(params);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    };
    const [isHovering,setIsHovering]=useState(false)
    console.log(isHovering);
    const handleMouseOver=()=>{
        setIsHovering(true);
        console.log(isHovering);
    }
    const handleMouseOut=()=>{
        setIsHovering(false);
        console.log(isHovering);
    }
    return (<>
        <div className="card_wrapper text-center">
            <div className="pt-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="liked-div">
                    <button className={isHovering ? "like-div" : "like-div ds-none"} >
                        {/* <img src={likeImg} alt="" className="likeAddLiked" id={obj.obj.id}/> */}
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="likeAddLiked" id={obj.obj.id}><rect width="25" height="25" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_267_90" transform="scale(0.00195312)"/>
                            </pattern>
                            <image id="image0_267_90" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAX5aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMjlUMTc6NTg6MjQrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTI5VDE3OjU4OjQxKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTI5VDE3OjU4OjQxKzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M2NlYmMzMDktZmJhMS0yYzRmLWEzMWYtNTJlYTAxMDVmODkzIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmY4OTVlOTUtNDBiYy0zMjQ3LWIyYWEtNjAxMTY0YTI2MDI1IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmY2YzZkNTgtYjA0NC0xYTQ3LTg1ZmEtNTAzZDkyZjQ2MWJlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZjZjNmQ1OC1iMDQ0LTFhNDctODVmYS01MDNkOTJmNDYxYmUiIHN0RXZ0OndoZW49IjIwMjItMDgtMjlUMTc6NTg6MjQrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2NlYmMzMDktZmJhMS0yYzRmLWEzMWYtNTJlYTAxMDVmODkzIiBzdEV2dDp3aGVuPSIyMDIyLTA4LTI5VDE3OjU4OjQxKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93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"/>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className="card-box-img">
                    <img src={`https://api.stroymarkets.uz/${obj.obj.image[0].image}`} alt="" className="card-images"/>
                </div>
                <p className="products-card-name">{obj.obj.name}</p>
                <div className="products-card-star">
                    {/* { for(let i = 1; i < 6; i++){
                        return(<><p>Math.floor((obj.obj.rate)/2)</p> </>)
                    }
                    } */}
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <p className="products-card-price"><span className="text-dark fs-5">{obj.obj.price} UZS</span> 1 за {obj.obj.type}</p>
                <p className="products-card-size">В наличии {obj.obj.count} {obj.obj.type}</p>
            </div>
            <div className="card_footer">
                <h3 className="text-light">В корзину</h3>
            </div>
        </div>
    </>
    );
}

export default index;