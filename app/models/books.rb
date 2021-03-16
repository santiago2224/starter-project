class Student
  attr_accessor :name, :major, :gpa
  def initializer(name, major, gpa)
    @name = name
    @major = major
    @gpa = gpa
  end
  def has_honors
    if @gpa >= 3.5
      return true
    end
    return false
  end
  


end
student1 = Student.new("Santiago", "Software Engineering", 3.2)
student2 = Student.new("Julian", "Civil Engineering", 3.5)


puts student1.has_honors