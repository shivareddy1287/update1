import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { allFetchAssetAction } from "../../../redux/slices/assetSlice/assetSlice";
import { useDispatch, useSelector } from "react-redux";

const OrgAsset = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state?.profile);
  const { _id } = profile?.userAuth;
  useEffect(() => {
    dispatch(allFetchAssetAction());
  }, [dispatch]);

  const asset = useSelector((state) => state?.asset);
  const { assetList, loading, appErr, serverErr } = asset;
  // console.log(assetList, loading, appErr, serverErr);
  // const filteredAssetList = assetList?.filter((eachid) => {
  //   if (eachid?.user?._id === _id) {
  //     return eachid;
  //   }
  // });
  // // console.log(filteredAssetList);
  // // console.log(assetList);

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {loading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <div className="cs_content_img_div_profile">
            <div className="cs_bg_img_div_profile"></div>
            <div className="cs_asset_bg_div">
              {" "}
              {serverErr || appErr ? (
                <p>
                  {serverErr} {appErr}
                </p>
              ) : null}
              <div className="cs_aaset_add_div">
                <h1 className="cs_asset_head_main">Asset</h1>

                <Link
                  className="cs_asset_add_asset_button"
                  to={`/organization/asset/create`}
                >
                  <span className="cs_asset_add_symbol">+</span> Add asset
                </Link>
              </div>
              <div className="cs_asset_table">
                {" "}
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Given Date</th>
                      <th>Asset Details</th>
                      <th>Type of Asset</th>
                      <th>Return Date</th>
                      <th>Added By</th>
                      <th>Added Time</th>
                      <th>Modified By</th>
                      <th>Modified Time</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assetList?.map((assetEach) => (
                      <tr key={assetEach?.id}>
                        <td>
                          {`${assetEach?.user?.basicInformation?.firstName} ${assetEach?.user?.basicInformation?.lastName} ${assetEach?.user?.basicInformation?.employerId}`}
                        </td>
                        <td>{assetEach?.givenDate}</td>
                        <td>{assetEach?.assetDetails}</td>
                        <td>{assetEach?.typeOfAsset}</td>
                        <td>{assetEach?.returnDate}</td>
                        <td>
                          {`${assetEach?.addedBy?.basicInformation?.firstName} ${assetEach?.addedBy?.basicInformation?.lastName} ${assetEach?.addedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{assetEach?.createdAt}</td>
                        <td>
                          {`${assetEach?.ModifiedBy?.basicInformation?.firstName} ${assetEach?.ModifiedBy?.basicInformation?.lastName} ${assetEach?.ModifiedBy?.basicInformation?.employerId}`}
                        </td>
                        <td>{assetEach?.updatedAt}</td>
                        <td>
                          <Link
                            to={`/organization/asset/update/${assetEach?.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/asset/delete/${assetEach?.id}`}
                          >
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/organization/asset/view/${assetEach?.id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgAsset;
