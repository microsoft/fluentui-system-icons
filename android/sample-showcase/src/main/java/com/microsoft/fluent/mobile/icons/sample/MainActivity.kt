/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 */
 
package com.microsoft.fluent.mobile.icons.sample

import android.annotation.SuppressLint
import android.app.Application
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.os.AsyncTask
import android.os.Bundle
import android.text.Editable
import android.text.TextUtils
import android.text.TextWatcher
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.inputmethod.InputMethodManager
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.*
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.snackbar.Snackbar
import com.microsoft.appcenter.AppCenter
import com.microsoft.appcenter.distribute.Distribute

class MainActivity : AppCompatActivity(), TextWatcher, Observer<List<IconInfo>>, View.OnClickListener {

    private val COLUMN_NUMBER_LIST_MODE = 1
    private val COLUMN_NUMBER_GRID_MODE = 4
    private var mIsListMode = true

    private var mAdapter: IconEntryAdapter? = null
    private var mGridLayoutManager: GridLayoutManager? = null
    private var mClearSearchButton: ImageButton? = null
    private var mSearchModeButton: ImageButton? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Enable edge-to-edge display
        WindowCompat.setDecorFitsSystemWindows(window, false)
        
        setContentView(R.layout.activity_main)
        
        // Handle system bar insets
        val rootView = findViewById<View>(android.R.id.content)
        ViewCompat.setOnApplyWindowInsetsListener(rootView) { view, windowInsets ->
            val insets = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars())
            view.setPadding(insets.left, insets.top, insets.right, insets.bottom)
            WindowInsetsCompat.CONSUMED
        }

        AppCenter.start(
            application,
            "1bd6c3f7-e668-4fa4-b10a-8343db2539bf",
            Distribute::class.java)

        val viewModel = ViewModelProviders.of(this).get(IconsViewModel::class.java)
        viewModel.getIconInfos().observe(this, this)

        mGridLayoutManager = GridLayoutManager(this, COLUMN_NUMBER_LIST_MODE)
        mAdapter = IconEntryAdapter(this)

        val recyclerView = findViewById<RecyclerView>(R.id.recycler_view)
        recyclerView.layoutManager = mGridLayoutManager
        recyclerView.adapter = mAdapter
        
        // Handle insets for RecyclerView to avoid content being hidden behind system bars
        ViewCompat.setOnApplyWindowInsetsListener(recyclerView) { view, windowInsets ->
            val insets = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars())
            view.setPadding(view.paddingLeft, 0, view.paddingRight, insets.bottom)
            windowInsets
        }
        
        recyclerView.addOnScrollListener(object : RecyclerView.OnScrollListener() {
            override fun onScrollStateChanged(recyclerView: RecyclerView, newState: Int) {
                if (newState == RecyclerView.SCROLL_STATE_DRAGGING) {
                    hideKeyboard(recyclerView)
                }
            }
        })

        val editText = findViewById<EditText>(R.id.search_field)
        editText.addTextChangedListener(this)

        mClearSearchButton = findViewById(R.id.search_clear_button)
        mClearSearchButton?.setOnClickListener {
            editText.setText(null)
        }

        mSearchModeButton = findViewById(R.id.search_mode_button)
        mSearchModeButton?.setOnClickListener {
            mIsListMode = mSearchModeButton?.isActivated!!
            mSearchModeButton?.isActivated = !mIsListMode
            ensureUi()
        }
        
        // Handle insets for search bar area to avoid overlapping with status bar
        val mainContainer = findViewById<View>(R.id.mainContainer) // Assuming there's a search container
        mainContainer?.let { container ->
            ViewCompat.setOnApplyWindowInsetsListener(container) { view, windowInsets ->
                val insets = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars())
                view.setPadding(view.paddingLeft, insets.top, view.paddingRight, view.paddingBottom)
                windowInsets
            }
        }
    }

    override fun afterTextChanged(s: Editable?) {
        if (TextUtils.isEmpty(s)) {
            mClearSearchButton?.visibility = View.GONE
        } else {
            mClearSearchButton?.visibility = View.VISIBLE
        }

        mAdapter?.filter?.filter(s)
    }

    override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
    }

    override fun onTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
    }

    override fun onChanged(iconInfos: List<IconInfo>) {
        mAdapter?.setIcons(iconInfos)
    }

    override fun onClick(view: View?) {
        view?.let { clickedView ->
            val position = findViewById<RecyclerView>(R.id.recycler_view).getChildAdapterPosition(clickedView)
            if (position != RecyclerView.NO_POSITION) {
                val iconInfo = mAdapter?.getIconAt(position)
                iconInfo?.let { icon ->
                    copyToClipboard(icon.iconName)
                    showCopyConfirmation(icon.iconName)
                }
            }
        }
    }

    private fun copyToClipboard(iconName: String) {
        val clipboard = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
        val clip = ClipData.newPlainText("Icon Name", iconName)
        clipboard.setPrimaryClip(clip)
    }

    private fun showCopyConfirmation(iconName: String) {
        val rootView = findViewById<View>(android.R.id.content)
        Snackbar.make(rootView, "Copied: $iconName", Snackbar.LENGTH_SHORT).show()
    }

    private fun ensureUi() {
        if (mIsListMode) {
            mGridLayoutManager?.spanCount = COLUMN_NUMBER_LIST_MODE
        } else {
            mGridLayoutManager?.spanCount = COLUMN_NUMBER_GRID_MODE
        }
        mAdapter?.notifyItemRangeChanged(0, mAdapter?.itemCount ?: 0)
    }

    private fun hideKeyboard(view: View) {
        val imm = view.context.getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        imm.hideSoftInputFromWindow(view.windowToken, 0)
    }

    private inner class IconEntryAdapter internal constructor(context: Context) :
        RecyclerView.Adapter<RecyclerView.ViewHolder>(), Filterable {

        private val mInflater: LayoutInflater = LayoutInflater.from(context)
        private var mOriginalIcons: List<IconInfo>? = null
        private var mDisplayIcons: List<IconInfo>? = null

        private val mListIconSize: Int = context.resources.getDimensionPixelSize(R.dimen.list_item_icon_size)
        private val mListVerticalPadding: Int = context.resources.getDimensionPixelSize(R.dimen.list_item_row_padding_top)
        private val mGridVerticalPadding: Int = context.resources.getDimensionPixelSize(R.dimen.outlook_content_inset)

        private val mFilter = object : Filter() {
            override fun performFiltering(charSequence: CharSequence): FilterResults {
                val results = FilterResults()

                if (TextUtils.isEmpty(charSequence)) {
                    results.count = mOriginalIcons!!.size
                    results.values = mOriginalIcons
                    return results
                }

                val filteredResults = arrayListOf<IconInfo>()
                for (info in mOriginalIcons!!) {
                    if (info.iconName.contains(charSequence)) {
                        filteredResults.add(info)
                    }
                }

                results.count = filteredResults.size
                results.values = filteredResults
                return results
            }

            override fun publishResults(charSequence: CharSequence, filterResults: FilterResults) {
                if (filterResults.count > 0) {
                    mDisplayIcons = filterResults.values as List<IconInfo>?
                    notifyDataSetChanged()
                }
            }
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
            val itemView = mInflater.inflate(R.layout.row_icon_entry, parent, false)
            itemView.setOnClickListener(this@MainActivity)
            return ContentViewHolder(itemView)
        }

        override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
            val icon = mDisplayIcons!![position]

            val contentHolder = holder as ContentViewHolder
            contentHolder.title.text = icon.iconName
            contentHolder.icon.setImageResource(icon.iconResId)

            if (mIsListMode) {
                contentHolder.title.visibility = View.VISIBLE
                contentHolder.icon.layoutParams.width = mListIconSize
                contentHolder.icon.layoutParams.height = mListIconSize
                contentHolder.container.setSquareMode(false)
                ViewCompat.setPaddingRelative(
                    contentHolder.container,
                    ViewCompat.getPaddingStart(contentHolder.container),
                    mListVerticalPadding,
                    ViewCompat.getPaddingEnd(contentHolder.container),
                    mListVerticalPadding
                )
            } else {
                contentHolder.title.visibility = View.GONE
                contentHolder.icon.layoutParams.width = ViewGroup.LayoutParams.MATCH_PARENT
                contentHolder.icon.layoutParams.height = ViewGroup.LayoutParams.MATCH_PARENT
                contentHolder.container.setSquareMode(true)
                ViewCompat.setPaddingRelative(
                    contentHolder.container,
                    ViewCompat.getPaddingStart(contentHolder.container),
                    mGridVerticalPadding,
                    ViewCompat.getPaddingEnd(contentHolder.container),
                    mGridVerticalPadding
                )
            }
        }

        override fun getItemCount(): Int {
            return if (mDisplayIcons == null) 0 else mDisplayIcons!!.size
        }

        override fun getFilter(): Filter {
            return mFilter
        }

        fun setIcons(iconInfos: List<IconInfo>) {
            mOriginalIcons = iconInfos
            mDisplayIcons = mOriginalIcons
            notifyDataSetChanged()
        }

        fun getIconAt(position: Int): IconInfo? {
            return if (position >= 0 && position < (mDisplayIcons?.size ?: 0)) {
                mDisplayIcons?.get(position)
            } else {
                null
            }
        }
    }

    class ContentViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val container: SquareLinearLayout = itemView.findViewById(R.id.container)
        val title: TextView = itemView.findViewById(R.id.settings_title)
        val icon: ImageView = itemView.findViewById(R.id.settings_icon)
    }

    class IconsViewModel(application: Application) : AndroidViewModel(application) {

        private var mIconInfos: MutableLiveData<List<IconInfo>>? = null

        fun getIconInfos() : LiveData<List<IconInfo>> {
            if (mIconInfos == null) {
                mIconInfos = MutableLiveData()
                loadIconInfo()
            }
            return mIconInfos!!
        }

        @SuppressLint("StaticFieldLeak")
        private fun loadIconInfo() {
            object : AsyncTask<Void, Void, List<IconInfo>>() {
                override fun doInBackground(vararg voids: Void): List<IconInfo> {
                    val result = arrayListOf<IconInfo>()

                    val drawables = getDrawables()

                    val fields = drawables::class.java.fields
                    for (field in fields) {
                        try {
                            if (field.name.endsWith("_selector")) {
                                continue
                            }
                            result.add(IconInfo(field.getInt(null), field.name))
                        } catch (e: IllegalAccessException) {
                            e.printStackTrace()
                        }

                    }

                    return result
                }

                override fun onPostExecute(iconInfos: List<IconInfo>) {
                    mIconInfos!!.value = iconInfos
                }
            }.execute()
        }

        private fun getDrawables() : com.microsoft.fluent.mobile.icons.R.drawable {
            try {
                val constructor =
                    com.microsoft.fluent.mobile.icons.R.drawable::class.java.getDeclaredConstructor()
                constructor.isAccessible = true
                return constructor.newInstance()
            } catch (e: Exception) {
                throw RuntimeException(e)
            }
        }
    }
}
