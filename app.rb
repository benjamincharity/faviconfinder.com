module Nesta
  class App
    not_found do
      cache haml(:error)
    end
  end
end
