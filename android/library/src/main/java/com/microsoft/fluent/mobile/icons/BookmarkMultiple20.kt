package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkMultiple20: ImageVector
  get() {
    if (_bookmarkMultiple20 != null) {
      return _bookmarkMultiple20!!
    }
    _bookmarkMultiple20 = fluentIcon(name = "Filled.BookmarkMultiple20", 20f) {
      materialPath {
          moveTo(6.268F, 3.0F)
          curveTo(6.613F, 2.402F, 7.26F, 2.0F, 8.0F, 2.0F)
          horizontalLineToRelative(4.5F)
          curveTo(14.433F, 2.0F, 16.0F, 3.567F, 16.0F, 5.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.184F, -0.101F, 0.354F, -0.264F, 0.44F)
          curveToRelative(-0.163F, 0.088F, -0.36F, 0.078F, -0.513F, -0.024F)
          lineTo(15.0F, 15.768F)
          verticalLineTo(5.5F)
          curveTo(15.0F, 4.12F, 13.88F, 3.0F, 12.5F, 3.0F)
          horizontalLineTo(6.268F)
          close()
          moveTo(6.0F, 4.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.184F, 0.101F, 0.354F, 0.264F, 0.44F)
          curveToRelative(0.163F, 0.088F, 0.36F, 0.078F, 0.513F, -0.024F)
          lineTo(9.0F, 15.101F)
          lineToRelative(4.223F, 2.815F)
          curveToRelative(0.153F, 0.102F, 0.35F, 0.112F, 0.513F, 0.025F)
          curveTo(13.898F, 17.854F, 14.0F, 17.684F, 14.0F, 17.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _bookmarkMultiple20!!
  }

private var _bookmarkMultiple20: ImageVector? = null
