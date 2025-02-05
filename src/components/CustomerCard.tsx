interface CustomerCardProps {
  cstmrName: string;
  cstmrReviewText: string;
  cstmrProfileImagePath: string;
}

const CustomerCard : React.FC<CustomerCardProps> = ({ cstmrName, cstmrReviewText, cstmrProfileImagePath }) => {
    return (
        <div className="card shadow-sm rounded-1 m-5 bg-white" style={{ width: "35rem" }}>
            <div className="card-body position-relative">
                <h5 className="card-title">{cstmrName}</h5>
                <p className="card-text p-3 pb-5 comment-txt">
                    {cstmrReviewText}
                </p>
                <img
                    src={cstmrProfileImagePath}
                    alt="Circular Avatar"
                    className="rounded-circle lb-x-center"
                    style={{ width: "100px", height: "100px", objectFit: "cover"}}
                    />
            </div>
        </div>
    );
}

export default CustomerCard;