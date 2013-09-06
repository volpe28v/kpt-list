FactoryGirl.define do
  factory :task_1, :class => Task do
    status 0
    msg "hello todo_h"
  end
end

FactoryGirl.define do
  factory :task_2, :class => Task do
    status 1
    msg "hello task_m"
  end
end

FactoryGirl.define do
  factory :task_3, :class => Task do
    status 2
    msg "hello task_l"
  end
end

FactoryGirl.define do
  factory :task_4, :class => Task do
    status 3
    msg "hello doing"
  end
end

FactoryGirl.define do
  factory :task_5, :class => Task do
    status 4
    msg "hello waiting"
  end
end

FactoryGirl.define do
  factory :task_6, :class => Task do
    status 5
    msg "hello done"
  end
end

FactoryGirl.define do
  factory :task_7, :class => Task do
    status 5
    msg "hello today done"
    updated_at DateTime.now
  end
end

FactoryGirl.define do
  factory :volpe, :class => Task do
    name     "volpe"
    password "volpevolpe"
    email    "volpe@volpe.com"
    bg_img   "hoge.jpg"
    layout   "landscape"
    pomo     9
    tasks {
      [
        Factory(:task_1),
        Factory(:task_2),
        Factory(:task_3),
        Factory(:task_4),
        Factory(:task_5),
        Factory(:task_6),
        Factory(:task_7)
      ]
    }
  end
end
