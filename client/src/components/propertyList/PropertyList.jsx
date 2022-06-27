import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const images = [
  "https://ak-d.tripcdn.com/images/0222p1200082k9b8583D0_Z_1080_808_R5_D.jpg",
  "https://ak-d.tripcdn.com/images/0224h1200082k9blh29A3_Z_1080_808_R5_D.jpg",
  "https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-03/67.%20gallery%20857x491-min.jpg",
  "https://jkpages.com/wp-content/uploads/2021/05/eden-1024x768.jpg",
  "https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/Raddison-Jammu.jpg"
]



const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
         
           
              <div className="pListItem">
                <img
                  src={images[0]}
                  alt=""
                  className="pListImg"
                />
                  <img
                  src={images[1]}
                  alt=""
                  className="pListImg"
                />
                  <img
                  src={images[2]}
                  alt=""
                  className="pListImg"
                />
                  <img
                  src={images[3]}
                  alt=""
                  className="pListImg"
                />
                  <img
                  src={images[4]}
                  alt=""
                  className="pListImg"
                />
                 
                <div className="pListTitles">
                </div>
              </div>
            
        </>
      )}
    </div>
  );
};

export default PropertyList;
