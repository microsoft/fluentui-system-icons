package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond20: ImageVector
  get() {
    if (_diamond20 != null) {
      return _diamond20!!
    }
    _diamond20 = fluentIcon(name = "Filled.Diamond20", 20f) {
      materialPath {
          moveTo(2.586F, 11.414F)
          curveToRelative(-0.781F, -0.781F, -0.781F, -2.047F, 0.0F, -2.828F)
          lineToRelative(6.002F, -6.0F)
          curveToRelative(0.78F, -0.781F, 2.047F, -0.781F, 2.828F, 0.0F)
          lineToRelative(6.002F, 6.0F)
          curveToRelative(0.781F, 0.78F, 0.781F, 2.047F, 0.0F, 2.828F)
          lineToRelative(-6.002F, 6.0F)
          curveToRelative(-0.78F, 0.781F, -2.047F, 0.781F, -2.829F, 0.0F)
          lineToRelative(-6.001F, -6.0F)
          close()        
      }
    }
    return _diamond20!!
  }

private var _diamond20: ImageVector? = null
