const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day:{
            type: Date,
            default: ()=>new Date()
        },
        exercises:[
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter an exercise name."
                },
                duration: {
                    type: Number,
                    required: "Please enter the duration of the exercise, i.e. 30 minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

workoutSchema.virtual ("totalDuration").get(function(){
    return this.exercises.reduce((total,exercise)=>{
        return total + exercise.duration
    })
})
const Workout = mongoose.model("Workout",workoutSchema);
module.exports = Workout