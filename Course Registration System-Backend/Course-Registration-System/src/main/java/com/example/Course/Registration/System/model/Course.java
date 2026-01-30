package com.example.Course.Registration.System.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Course {

    @Id
    private String courseID;
    private String courseName;
    private String trainer;
    private int durationInWeek;

    public String getCourseID() {
        return courseID;
    }

    public void setCourseID(String courseID) {
        this.courseID = courseID;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public int getDurationInWeek() {
        return durationInWeek;
    }

    public void setDurationInWeek(int durationInWeek) {
        this.durationInWeek = durationInWeek;
    }
}
