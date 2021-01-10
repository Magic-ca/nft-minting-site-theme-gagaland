import React, { memo } from 'react';
import Clock from "./Clock";

//react functional component
const NftCard = ({ nft, className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4', clockTop = true, height, onImgLoad }) => {

    return (
        <div className={className}>
            <div className="nft__item m-0">
            { nft.item_type === 'single_items' ? (
             <div className='icontype'><i className="fa fa-bookmark"></i></div>   
             ) : (  
             <div className='icontype'><i className="fa fa-shopping-basket"></i></div>
                )
            }
                { nft.deadline && clockTop &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                }
                <div className="author_list_pp">
                    <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                        <img className="lazy" src={nft.authorImg} alt=""/>
                        <i className="fa fa-check"></i>
                    </span>
                </div>
                <div className="nft__item_wrap" style={{height: `${height}px`}}>
                    <span>
                        <img onLoad={onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                    </span>
                </div>
                { nft.deadline && !clockTop &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                }
                <div className="nft__item_info">
                    <span onClick={()=> window.open(nft.nftLink, "_self")}>
                        <h4>{nft.title}</h4>
                    </span>
                    { nft.status === 'has_offers' ? (
                            <div className="has_offers">
                                <span className='through'>{nft.priceover}</span> {nft.price}
                            </div> 
                        ) : (
                            <div className="nft__item_price">
                                {nft.price}
                                { nft.status === 'on_auction' && 
                                    <span>{nft.bid}</span>
                                }
                            </div>
                        )
                    }
                    <div className="nft__item_action">
                        <span onClick={()=> window.open(nft.bidLink, "_self")}>{ nft.status === 'on_auction' ? 'Place a bid' : 'Buy Now' }</span>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>{nft.likes}</span>
                    </div>                            
                </div> 
            </div>
        </div>            
    );
};

export default memo(NftCard);