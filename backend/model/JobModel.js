const mongoose = require('mongoose');

const WorkSchema = mongoose.Schema;

const jobSchema = new WorkSchema(
    {
        
        OrderID: { type: String, required: true },
        Cut: { type: String, required: true },
        Cutperiod: { type: String, required: true },
        Saw: { type: String, required: true },
        Sawperiod: { type: String, required: true },
        Laund: { type: String, required: true },
        Laundperiod: { type: String, required: true },
        Fold: { type: String, required: true },
        Foldperiod: { type: String, required: true },
        Pack: { type: String, required: true },
        Packperiod: { type: String, required: true }
    }
)

const JobModel = mongoose.model("Workplan", jobSchema);

module.exports = JobModel;