package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pill24: ImageVector
  get() {
    if (_pill24 != null) {
      return _pill24!!
    }
    _pill24 = fluentIcon(name = "Filled.Pill24", 24f) {
      materialPath {
          moveTo(13.302F, 3.525F)
          curveToRelative(1.98F, -1.98F, 5.192F, -1.98F, 7.172F, 0.0F)
          curveToRelative(1.98F, 1.98F, 1.98F, 5.192F, 0.0F, 7.172F)
          lineToRelative(-9.778F, 9.778F)
          curveToRelative(-1.98F, 1.98F, -5.191F, 1.98F, -7.172F, 0.0F)
          curveToRelative(-1.98F, -1.98F, -1.98F, -5.191F, 0.0F, -7.172F)
          lineToRelative(9.778F, -9.778F)
          close()
          moveToRelative(6.111F, 1.061F)
          curveToRelative(-1.394F, -1.395F, -3.655F, -1.395F, -5.05F, 0.0F)
          lineToRelative(-4.359F, 4.359F)
          lineToRelative(5.05F, 5.05F)
          lineToRelative(4.36F, -4.358F)
          curveToRelative(1.394F, -1.395F, 1.394F, -3.656F, 0.0F, -5.051F)
          close()
          moveToRelative(-8.606F, 13.691F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.441F, 1.44F)
          curveToRelative(-0.578F, 0.578F, -1.51F, 0.587F, -2.1F, 0.022F)
          lineTo(6.19F, 18.663F)
          curveToRelative(-0.298F, -0.287F, -0.773F, -0.277F, -1.06F, 0.021F)
          curveToRelative(-0.287F, 0.3F, -0.277F, 0.774F, 0.022F, 1.06F)
          lineToRelative(0.016F, 0.017F)
          curveToRelative(1.178F, 1.131F, 3.045F, 1.112F, 4.2F, -0.043F)
          lineToRelative(1.44F, -1.44F)
          close()        
      }
    }
    return _pill24!!
  }

private var _pill24: ImageVector? = null
