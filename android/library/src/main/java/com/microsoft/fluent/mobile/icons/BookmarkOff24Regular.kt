package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookmarkOff24: ImageVector
  get() {
    if (_bookmarkOff24 != null) {
      return _bookmarkOff24!!
    }
    _bookmarkOff24 = fluentIcon(name = "Regular.BookmarkOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.788F, 2.788F)
          curveToRelative(-0.004F, 0.06F, -0.005F, 0.12F, -0.005F, 0.181F)
          verticalLineToRelative(14.996F)
          curveToRelative(0.0F, 0.611F, 0.691F, 0.966F, 1.188F, 0.609F)
          lineTo(12.0F, 17.673F)
          lineToRelative(5.812F, 4.18F)
          curveTo(18.309F, 22.212F, 19.0F, 21.857F, 19.0F, 21.246F)
          verticalLineToRelative(-1.183F)
          lineToRelative(1.718F, 1.718F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(14.221F, 16.342F)
          verticalLineToRelative(1.22F)
          lineTo(12.44F, 16.14F)
          curveToRelative(-0.262F, -0.188F, -0.615F, -0.188F, -0.876F, 0.0F)
          lineToRelative(-5.061F, 3.642F)
          verticalLineTo(7.563F)
          lineTo(17.5F, 18.562F)
          close()
          moveToRelative(0.0F, -12.313F)
          verticalLineToRelative(8.07F)
          lineToRelative(1.5F, 1.5F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(8.253F)
          curveTo(7.658F, 3.0F, 7.1F, 3.16F, 6.62F, 3.44F)
          lineToRelative(1.133F, 1.13F)
          curveTo(7.912F, 4.524F, 8.08F, 4.5F, 8.253F, 4.5F)
          horizontalLineToRelative(7.498F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          close()        
      }
    }
    return _bookmarkOff24!!
  }

private var _bookmarkOff24: ImageVector? = null
