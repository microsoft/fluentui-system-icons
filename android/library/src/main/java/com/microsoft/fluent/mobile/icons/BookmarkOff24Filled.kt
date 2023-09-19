package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkOff24: ImageVector
  get() {
    if (_bookmarkOff24 != null) {
      return _bookmarkOff24!!
    }
    _bookmarkOff24 = fluentIcon(name = "Filled.BookmarkOff24", 24f) {
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
          moveToRelative(15.721F, 4.03F)
          verticalLineToRelative(9.57F)
          lineTo(6.621F, 3.437F)
          curveTo(7.1F, 3.16F, 7.657F, 3.0F, 8.252F, 3.0F)
          horizontalLineToRelative(7.498F)
          curveTo(17.545F, 3.0F, 19.0F, 4.455F, 19.0F, 6.25F)
          close()        
      }
    }
    return _bookmarkOff24!!
  }

private var _bookmarkOff24: ImageVector? = null
