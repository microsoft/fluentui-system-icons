package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkOff20: ImageVector
  get() {
    if (_bookmarkOff20 != null) {
      return _bookmarkOff20!!
    }
    _bookmarkOff20 = fluentIcon(name = "Filled.BookmarkOff20", 20f) {
      materialPath {
          moveTo(16.0F, 16.707F)
          lineToRelative(1.146F, 1.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(4.0F, 4.707F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.188F, 0.105F, 0.36F, 0.273F, 0.446F)
          curveToRelative(0.168F, 0.085F, 0.369F, 0.069F, 0.521F, -0.042F)
          lineTo(10.0F, 14.118F)
          lineToRelative(5.206F, 3.786F)
          curveToRelative(0.152F, 0.111F, 0.353F, 0.127F, 0.52F, 0.042F)
          curveTo(15.895F, 17.86F, 16.0F, 17.688F, 16.0F, 17.5F)
          verticalLineToRelative(-0.793F)
          close()
          moveTo(16.0F, 4.5F)
          verticalLineToRelative(9.379F)
          lineTo(4.794F, 2.671F)
          curveTo(5.24F, 2.255F, 5.84F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.88F, 2.0F, 16.0F, 3.12F, 16.0F, 4.5F)
          close()        
      }
    }
    return _bookmarkOff20!!
  }

private var _bookmarkOff20: ImageVector? = null
