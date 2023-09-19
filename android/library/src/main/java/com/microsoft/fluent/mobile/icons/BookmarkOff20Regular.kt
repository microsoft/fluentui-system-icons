package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookmarkOff20: ImageVector
  get() {
    if (_bookmarkOff20 != null) {
      return _bookmarkOff20!!
    }
    _bookmarkOff20 = fluentIcon(name = "Regular.BookmarkOff20", 20f) {
      materialPath {
          moveTo(4.0F, 4.707F)
          lineTo(2.147F, 2.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(15.0F, 15.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(16.0F, 16.707F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.188F, -0.106F, 0.36F, -0.273F, 0.446F)
          curveToRelative(-0.168F, 0.085F, -0.37F, 0.069F, -0.521F, -0.042F)
          lineTo(10.0F, 14.118F)
          lineToRelative(-5.206F, 3.786F)
          curveToRelative(-0.152F, 0.111F, -0.353F, 0.127F, -0.521F, 0.042F)
          curveTo(4.105F, 17.86F, 4.0F, 17.688F, 4.0F, 17.5F)
          verticalLineTo(4.707F)
          close()
          moveToRelative(11.0F, 11.0F)
          lineToRelative(-10.0F, -10.0F)
          verticalLineToRelative(10.811F)
          lineToRelative(4.706F, -3.422F)
          curveToRelative(0.175F, -0.128F, 0.413F, -0.128F, 0.588F, 0.0F)
          lineTo(15.0F, 16.518F)
          verticalLineToRelative(-0.811F)
          close()
          moveTo(15.0F, 4.5F)
          verticalLineToRelative(8.379F)
          lineToRelative(1.0F, 1.0F)
          verticalLineTo(4.5F)
          curveTo(16.0F, 3.12F, 14.88F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.84F, 2.0F, 5.24F, 2.255F, 4.794F, 2.672F)
          lineTo(5.502F, 3.38F)
          curveTo(5.767F, 3.144F, 6.117F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 3.0F, 15.0F, 3.672F, 15.0F, 4.5F)
          close()        
      }
    }
    return _bookmarkOff20!!
  }

private var _bookmarkOff20: ImageVector? = null
