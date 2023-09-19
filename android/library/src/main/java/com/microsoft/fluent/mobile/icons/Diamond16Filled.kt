package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond16: ImageVector
  get() {
    if (_diamond16 != null) {
      return _diamond16!!
    }
    _diamond16 = fluentIcon(name = "Filled.Diamond16", 16f) {
      materialPath {
          moveTo(1.586F, 9.397F)
          curveToRelative(-0.781F, -0.78F, -0.781F, -2.047F, 0.0F, -2.828F)
          lineTo(6.57F, 1.586F)
          curveToRelative(0.782F, -0.781F, 2.048F, -0.781F, 2.83F, 0.0F)
          lineToRelative(4.984F, 4.983F)
          curveToRelative(0.78F, 0.781F, 0.78F, 2.047F, 0.0F, 2.828F)
          lineTo(9.399F, 14.38F)
          curveToRelative(-0.781F, 0.781F, -2.047F, 0.781F, -2.829F, 0.0F)
          lineTo(1.586F, 9.397F)
          close()        
      }
    }
    return _diamond16!!
  }

private var _diamond16: ImageVector? = null
