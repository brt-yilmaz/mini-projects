class Student {
  private String firstName;
  private String lastName;

  public Student(String first, String last) {
    this.firstName = first;
    this.lastName = last;
  }

  public String printFullName() {
    return firstName + " " + lastName;
  }

  public static Integer randomAge() {
    int age = (int) (Math.random() * 100);
    return age;
  }

}

class Main {
  public static void main(String[] args) {
    Student[] students = new Student[] {
        new Student("Morgan", "Freeman"),
        new Student("Brad", "Pitt"),
        new Student("Kevin", "Spacey"),
    };
    for (Student s : students) {
      System.out.println(s.printFullName() + " " + Student.randomAge());
    }
  }
}