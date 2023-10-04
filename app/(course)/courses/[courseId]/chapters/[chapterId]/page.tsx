import { getChapter } from '@/actions/get-chapter';
import { Banner } from '@/components/banner';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { VideoPlayer } from './_components/video-player';
import { CourseEnrollButton } from './_components/course-enroll-button';
import { Separator } from '@/components/ui/separator';
import { Preview } from '@/components/preview';

const ChapterIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
    chapterId: string;
  };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }
  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect('/');
  }

  const isLocked = !chapter.isFree && !purchase;
  const completedOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant='success' label='You already completed this chapter.' />
      )}

      {isLocked && (
        <Banner
          variant='warning'
          label='You need to purchase this course to watch this chapter.'
        />
      )}
      <div className='flex flex-col max-w-4xl mx-auto pb-20'>
        <div className='p-4'>
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id!}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completedOnEnd}
          />
        </div>
        <div>
          <div className='p-4 flex flex-col md:flex-row items-center'>
            <h2 className='text2xl font-semibold mb-2'>{chapter.title}</h2>
            {purchase ? (
              <div>{/* TODO: Add CourseProgress Button */}</div>
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className='p-4'>
                {attachments.map((attachment) => {
                  <a href={attachment.url} target='_blank' key={attachment.id}>
                    <p>{attachment.id}</p>
                  </a>;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
