class HomeController < ApplicationController
  def index
  end

  def upload
  		uploaded = params[:picture]
  		@original_filename, @content_type, @new_path = file_save(uploaded)
      redirect_to "https://docs.google.com/viewerng/viewer?url=http://dgssh.iptime.org:49292/images/" + @new_path
      #redirect_to "https://docs.google.com/gview?url=http://dgssh.iptime.org:49292/images/" + @new_path + "&embedded=true"

  end

  private

  def file_save(uploaded_file)
    @original_filename = uploaded_file.original_filename
    @content_type = uploaded_file.content_type
    
    file = File.join(Rails.root, "public", "images", @original_filename)
    @new_path = File.join(@original_filename)
    FileUtils.cp uploaded_file.path, file
    FileUtils.rm uploaded_file.path
    return @original_filename, @content_type, @new_path
  end
end
