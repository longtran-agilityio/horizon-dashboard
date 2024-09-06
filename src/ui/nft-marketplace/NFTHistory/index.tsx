import Image from 'next/image';

// components
import { Text, Button } from '@/components';

// Utils
import { formatDateRelativeToNow } from '@/utils/format';

interface History {
  image: string;
  title: string;
  author: string;
  price: string;
  timeAgo: Date;
}

interface NFTHistoryProps {
  historyList: History[];
}

const NFTHistory = ({ historyList }: NFTHistoryProps) => {
  return (
    <div className="flex flex-col bg-white dark:bg-indigo rounded-md max-w-nftCard w-full overflow-auto shadow-md">
      <div className="flex items-center justify-between p-[18px]">
        <Text className="leading-8 font-poppins font-bold text-blue-450">
          History
        </Text>

        <Button className="text-blue-450 dark:text-white font-medium bg-gray dark:bg-purple-750 rounded-[70px]">
          See all
        </Button>
      </div>

      <div className="flex justify-center flex-col">
        {historyList.map(({ image, title, author, price, timeAgo }, index) => (
          <div
            key={index}
            className="max-w-[448px] flex gap-8 justify-between p-5 rounded-md hover:shadow-md hover:dark:bg-indigo-light"
          >
            <div className="flex items-center gap-4">
              <div className="w-[66px] h-[66px] items-center hidden md:flex">
                <Image
                  src={image}
                  alt={title}
                  width={66}
                  height={66}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <Text className="leading-tiny font-bold">Colorful Heaven</Text>
                <Text className="leading-small text-small text-secondary">
                  By {author}
                </Text>
              </div>
            </div>

            <div className="flex items-center">
              <Text className="font-bold">{price} $</Text>
            </div>

            <div className="flex items-center">
              <Text className="text-secondary">
                {formatDateRelativeToNow(timeAgo)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTHistory;
