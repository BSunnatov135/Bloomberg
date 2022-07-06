import styles from './main.module.css';
import { latests, mostreads,weekendtops, firstgalleryitems, waritems, weekenditems, gallerylongitems, cryptoitems, equalityitems, wealthitems,citylabitems,greenitems, businessitems, politicsitems, screentimeitems,textitems, techitems, shorttextitems, quicktaketextitems, currencytextitems, fixtextitems, hyperdriveitems, prognosisitems, pursuititems } from '../../mock-data/items';
import NewsItem from '../NewsItem';
import WeekendsItem from '../WeekendsItem'
import GalleryItem from '../GalleryItem';
import GalleryLongItem from '../GalleryLongItem'
import GalleryShortItem from '../GalleryShortItem'
import TextItem from '../TextItem';
import ShortTextItem from '../ShortTextItem';

function Main () {
    return (
        <main className={styles.MainContainer}>
            <div className={styles.TopContainer}>
                <div className={styles.TopWrapper}>
                    <article className={styles.TopArticle}>
                        <div className={styles.TopArticleImage}>
                            <img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4FuAaBGg5B8/v0/390x293.jpg'></img>
                        </div>
                        <div className={styles.TopArticleContent}>
                            <a href='#' className={styles.TopArticleTitle}>JPMorgan’s Aronov Ignores the ‘Cash Is Trash’ Chorus: Q&A</a>
                            <div className={styles.TopArticleFlex}>
                                <div className={styles.TopArticleText}>The Worst Stock Selloff In Half a Century Might Not Be Done Yet </div>
                                <div className={styles.TopArticleText}>Rattled Stock Bulls Keep Paying Punishing Price for Hopefulness</div>
                                <div className={styles.TopArticleText}>Bond Holders Look to Recession for Salvation After Vicious Half</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <section className={styles.Latest_Weekends_Container}>
                <div className={styles.LatestContainer}>
                    <h3 className={styles.LatestTitle}>Latest</h3>
                    <div className={styles.LatestMap}>
                    {latests.map(latest=>(
                         <NewsItem key={latest.id} title={latest.title} category={latest.category} time={latest.time}/>
                    ))}
                    </div>
                    <h3 className={`${styles.LatestTitle} ${styles.MostRead}`}>most read</h3>
                    {mostreads.map(mostread=>(
                         <NewsItem key={mostread.id} title={mostread.title} category={mostread.category}/>
                    ))}
                </div>
                <div className={styles.WeekendsContainer}>
                    <div className={styles.WeekendsTop}>
                        <h3 className={styles.WeekendsTitle}>Weekends</h3>
                        <img className={styles.WeekendsImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFOtlDrp8_.Y/v1/320x240.jpg'></img>
                        <div className={styles.WeekendsText}>
                            <span className={styles.WeekendsCategory}>Economics</span>
                            <h3 className={styles.WeekendsTopTitle}>Germany Risks a Cascade of Utility Failures, Economy Chief Says</h3>
                            <div className={styles.WeekendsTopText}>Bond Holders Look to Recession for Salvation After Vicious Half</div>
                            <div className={styles.WeekendsTopText}>JPMorgan Sees ‘Stratospheric’ $380 Oil on Worst-Case Russian Cut</div>
                            <div className={styles.WeekendsTopText}>Scholz Indicates German Government Ready to Support Uniper</div>
                        </div>
                    </div>
                    <div className={styles.WeekendsNews}>
                    {weekendtops.map(weekendtop=>(
                         <WeekendsItem key={weekendtop.id} title={weekendtop.title} category={weekendtop.category}/>
                    ))}
                    </div>
                    <div className={styles.WeekendsLiveContainer}>
                        <div className={styles.WeekendsLive}>
                            <div className={styles.WeekendsLiveImage}>
                                <div className={styles.WeekendsLiveContent}>
                                    <video src="blob:https://www.bloomberg.com/30506cfd-c7ee-4053-93cc-2d04f3194c20" poster='https://assets.bwbx.io/images/izrptLrH5AWw/v1/320x180.jpg'></video>
                                    <div className={styles.BloombergTV}>Live on Bloomberg TV</div>
                                    <div className={styles.BloombergText}>Bloomberg Front Row</div>
                                </div>
                            </div>
                           
                        </div>
                        <div className={styles.WeekendsLiveText}>
                            <img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izekK2zTEjD4/v0/200x150.jpg'></img>
                            <span>Business</span>
                            <h3 className={styles.WeekendsLiveTitle}>GSK’s New Vaccine Hire Looks Beyond Covid in Quest for Next Hit</h3>
                        </div>
                        <div className={styles.WeekendsLastContent}>
                            <span>Pursuits</span>
                            <h3 className={styles.WeekendsLiveTitle}>Egypt Closes Coastal Area After Shark Kills Austrian Swimmer</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.TopRightContainer}>
                    <div className={styles.TopRightContent}>
                        <h2 className={styles.TopRightTitle}>
                            Opinion
                        </h2>
                        <div className={styles.TopRightText}>
                            <div className={styles.TopRightSubtitle}>Julian Lee</div>
                            <h3 className={styles.TopRightContentTitle}>OPEC+ Did Its Job, But Don’t Expect It to Disappear</h3>
                        </div>
                        <div className={styles.TopRightText}>
                            <div className={styles.TopRightSubtitle}>Brooke Sample</div>
                            <h3 className={styles.TopRightContentTitle}>Trump Didn’t Get His Hollywood Ending</h3>
                        </div>
                        <div className={styles.TopRightText}>
                            <div className={styles.TopRightSubtitle}>Stephen Mihm</div>
                            <h3 className={styles.TopRightContentTitle}>America's Period Taboo Will Outlast the Tampon Shortage</h3>
                        </div>
                        <div className={styles.TopRightText}>
                            <div className={styles.TopRightSubtitle}>Mark Buchanan</div>
                            <h3 className={styles.TopRightContentTitle}>Plastic-Munching Bacteria Offer Hope for Recycling</h3>
                        </div>
                        <div className={styles.TopRightText}>
                            <div className={styles.TopRightSubtitle}>Martin Ivens</div>
                            <h3 className={styles.TopRightContentTitle}>British Skepticism of the Courts Has Deep Roots</h3>
                        </div>
                        <div className={styles.RightOpinion}>
                            <span className={styles.OpinionText}>More from opinion</span>
                        </div>
                        <div className={styles.SubscriptionTitle}>One story you'll want to talk about.</div>
                        <label>Get The Big Take newsletter in your inbox daily.</label>
                    </div>
                </div>
            </section>
            <section className={styles.GalleryTopContainer}>
                <div className={styles.GalleryFlexContainer}>
                {firstgalleryitems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
                </div>
                <h2 className={styles.GalleryFlexTitle}>War in Ukraine</h2>
                <div className={styles.GalleryFlexContainer}>
                {waritems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
                </div>
                <h2 className={styles.GalleryFlexTitle}>Weekend reads</h2>
                <div className={styles.GalleryFlexContainer}>
                {weekenditems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
                </div>
                <h2 className={styles.GalleryFlexTitle}>Stories For You</h2>
                <div className={styles.GalleryFlexContainer}>
                {gallerylongitems.map(firstgalleryitem=>(
                         <GalleryLongItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
                </div>
                <h2 className={styles.GalleryFlexTitle}>Crypto</h2>
                <div className={styles.GalleryFlexContainer}>
                {cryptoitems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} time={firstgalleryitem.time}/>
                    ))}
                </div>
                <h2 className={styles.GalleryFlexTitle}>Equality</h2>
                <div className={styles.GalleryFlexContainer}>
                {equalityitems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image} time={firstgalleryitem.time}/>
                    ))}
                </div>
            </section>
            <section className={styles.QuicktakeContainer}>
                <div className={styles.QuicktakeTitle}>
                    <img className={styles.QuicktimeTitleImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iz0gTLiBTBb8/v0/-1x86.png'></img>
                    <span className={styles.QuicktakeSubtitle}>The Business Network for the New Generation</span>
                </div>
                <div className={styles.QuicktakeFlexContainer}>
                    <div className={styles.QuicktakeLeft}>
                        <h2 className={styles.QuicktakeLeftTitle}>Up next</h2>
                        <div className={styles.QuicktakeLeftContent}>
                            <p className={styles.QuicktakeLeft_OnNow}>On Now</p>
                            <div className={styles.QuicktakeLeftContentTitle}>My Hustle - Sports Trainers</div>
                        </div>
                        <div className={styles.QuicktakeLeftContent}>
                            <p className={styles.QuicktakeLeft_OnNow}>06:00 PM</p>
                            <div className={styles.QuicktakeLeftContentTitle}>My Hustle - Industry Movers</div>
                        </div>
                        <div className={styles.QuicktakeLeftContent}>
                            <p className={styles.QuicktakeLeft_OnNow}>06:30 PM</p>
                            <div className={styles.QuicktakeLeftContentTitle}>My Hustle - Changemakers III</div>
                        </div>
                        <div className={styles.QuicktakeLeftContent}>
                            <p className={styles.QuicktakeLeft_OnNow}>07:00 PM</p>
                            <div className={styles.QuicktakeLeftContentTitle}>Wild Surf - Amber Mozo</div>
                        </div>
                    </div>
                    <div className={styles.QuicktakeLiveStreamContainer}>
                        <video className={styles.QuicktakeLiveStreamVideo} src='blob:https://www.bloomberg.com/3ddf747d-5c26-4087-8f43-182674c1630a'></video>
                    </div>
                    <div className={styles.QuicktakeRight}>
                        <p className={styles.QuicktakeRight_OnNow}>Live now</p>
                        <h2>My Hustle - Sports Trainers</h2>
                        <p>A former NFL player launches a series of side-hustles, including a fashion line that offers affordable, stylish suits. Then meet the man who started an academy aimed a...</p>
                    </div>
                </div>
                <div className={styles.QuicktakeVideoGallery}>
                    <div className={styles.QuicktakeVideoItem}>
                        <img className={styles.QuicktakeVideoImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iP15FHqCI818/v3/550x304.jpg'></img>
                        <span className={styles.QuicktakeVideoTitle}>Farewell to the Hong Kong I Loved: Matthew Brooker</span>
                    </div>
                    <div className={styles.QuicktakeVideoItem}>
                        <img className={styles.QuicktakeVideoImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVGYvtgGm__Y/v3/550x304.jpg'></img>
                        <span className={styles.QuicktakeVideoTitle}>Bloomberg Breakfast: Wimbledon Boss Sally Bolton</span>
                    </div>
                    <div className={styles.QuicktakeVideoItem}>
                        <img className={styles.QuicktakeVideoImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.NlHjx2OILw/v3/550x304.jpg'></img>
                        <span className={styles.QuicktakeVideoTitle}>TikTok Turns on the Money Machine</span>
                    </div>
                    <div className={styles.QuicktakeVideoItem}>
                        <img className={styles.QuicktakeVideoImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iv5wGaq8YBrY/v3/550x304.jpg'></img>
                        <span className={styles.QuicktakeVideoTitle}>The Rich Are Driving Climate Change</span>
                    </div>
                </div>
            </section>
            <section className={styles.GalleryTopContainer}>
            <h2 className={styles.GalleryFlexTitle}>Bloomberg Wealth</h2>
            <div className={styles.GalleryFlexContainer}>
                {wealthitems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
            </div>
            <div className={styles.CityLabTitle}></div>
            <div className={styles.GalleryFlexContainer}>
                {citylabitems.map(firstgalleryitem=>(
                         <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                    ))}
            </div>
            </section>
            <section className={styles.GreenTopContainer}>
                <section className={styles.GreenLeftContainer}>
                    <div className={styles.GreenTop}>
                        <h3 className={styles.GreenTopTitle}>Bloomberg Green</h3>
                        <img className={styles.GreenImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ii9uyeSBORxc/v0/420x315.jpg'></img>
                        <div className={styles.GreenTopText}>
                            <span className={styles.GreenTopCategory}>Green</span>
                            <span className={styles.GreenTopMainTitle}>World Energy Crisis Would Be Worse Without China’s Rainy Season</span>
                        </div>
                        <div className={styles.GreenFlexCOntainer}>
                        {greenitems.map(latest=>(
                         <GalleryItem key={latest.id} title={latest.title} category={latest.category} time={latest.time}/>
                        ))}</div>
                    </div>
                </section>
                <section className={styles.GreenRightContainer}>
                    <img className={styles.GreenRightImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ib38V.7Ey7dU/v0/280x-1.jpg'></img>
                </section>
            </section>
            <section className={styles.GreenTopContainer}>
                <section className={styles.GreenLeftContainer}>
                    <div className={styles.GreenTop}>
                        <h3 className={styles.GreenTopTitle}>Bloomberg Businesweek</h3>
                        <img className={styles.GreenImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iB5VAw82TMTA/v0/420x315.jpg'></img>
                        <div className={styles.GreenTopText}>
                            <span className={styles.GreenTopCategory}>The Heist Issue</span>
                            <span className={styles.GreenTopMainTitle}>Find the Lost Treasure: Bloomberg Businessweek’s Heist Issue Crossword
                            </span>
                        </div>
                        <div className={styles.GreenFlexCOntainer}>
                        {businessitems.map(latest=>(
                         <GalleryItem key={latest.id} title={latest.title} category={latest.category} time={latest.time}/>
                        ))}</div>
                    </div>
                </section>
                <section className={styles.GreenRightContainer}>
                    <img className={styles.GreenRightImage} src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iuKzJ4TByFsY/v0/280x-1.jpg'></img>
                </section>
            </section>
            <h2 className={styles.GalleryFlexTitle}>Politics</h2>
            <section className={styles.GalleryFlexContainer}>
            {politicsitems.map(firstgalleryitem=>(
                <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image} time={firstgalleryitem.time}/>
            ))}
            </section>
            <h2 className={styles.GalleryFlexTitle}>Screentime</h2>
            <section className={styles.GalleryFlexContainer}>
            {screentimeitems.map(firstgalleryitem=>(
                <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
            ))}
            </section>
            <h2 className={styles.GalleryFlexTitle}>European Business</h2>
            <div className={styles.GalleryFlexContainer}>
                {textitems.map(firstgalleryitem=>(
                         <TextItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} time={firstgalleryitem.time}/>
                    ))}
            </div>
            <section className={styles.GreenTopContainer} style={{display:'inherit'}}>
                    <h2 className={styles.GalleryFlexTitle}>Technology</h2>
                    <section className={styles.GalleryShortFlexContainer}>
                        {techitems.map(firstgalleryitem=>(
                        <GalleryShortItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                        ))}
                        {shorttextitems.map(firstgalleryitem=>(
                         <ShortTextItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category}/>
                        ))}
                    </section>
            </section>
            <h2 className={styles.GalleryFlexTitle}>Markets</h2>
            <div className={styles.GalleryFlexContainer}>
                {textitems.map(firstgalleryitem=>(
                         <TextItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category}/>
                    ))}
            </div>

            <h2 className={styles.GalleryFlexTitle}>Pursuits</h2>
            <section className={`${styles.GalleryShortFlexContainer} ${styles.GalleryDefautContainer}`}>
                {pursuititems.map(firstgalleryitem=>(
                <GalleryShortItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
                ))}
            </section>
            <h2 className={styles.GalleryFlexTitle}>Quicktake</h2>
            <section className={styles.GalleryFlexContainer}>
            {quicktaketextitems.map(firstgalleryitem=>(
                <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
            ))}
            </section>
            <h2 className={styles.GalleryFlexTitle}>Currency Markets</h2>
            <div className={styles.GalleryFlexContainer}>
                {currencytextitems.map(firstgalleryitem=>(
                         <TextItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category}/>
                    ))}
            </div>
            <h2 className={styles.GalleryFlexTitle}>The FIX</h2>
            <div className={styles.GalleryFlexContainer}>
                {fixtextitems.map(firstgalleryitem=>(
                         <TextItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category}/>
                    ))}
            </div>
            <h2 className={styles.GalleryFlexTitle}>Hyperdrive</h2>
            <section className={styles.GalleryFlexContainer}>
            {hyperdriveitems.map(firstgalleryitem=>(
                <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
            ))}</section>
            <h2 className={styles.GalleryFlexTitle}>Prognosis</h2>
            <section className={styles.GalleryFlexContainer}>
            {prognosisitems.map(firstgalleryitem=>(
                <GalleryItem key={firstgalleryitem.id} title={firstgalleryitem.title} category={firstgalleryitem.category} image={firstgalleryitem.image}/>
            ))}</section>
        </main>
    )
}
export default Main;