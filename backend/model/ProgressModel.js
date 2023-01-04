const mongoose = require('mongoose');

const ProgSchema = mongoose.Schema;

const Progress = new ProgSchema(
    {
        OrderIDPro: { type: String, required: true },
        CutPro: { type: String, required: true },
        SawPro: { type: String, required: true },
        LaundPro: { type: String, required: true },
        FoldPro: { type: String, required: true },
        QualityPro: { type: String, required: true },
        PackPro: { type: String, required: true },
        U_DatePro: { type:Date, required: true }
    }
)

const ProgressModel = mongoose.model("Job_Progress", Progress);

module.exports = ProgressModel;
