package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Diamond16: ImageVector
  get() {
    if (_diamond16 != null) {
      return _diamond16!!
    }
    _diamond16 = fluentIcon(name = "Regular.Diamond16", 16f) {
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
          moveToRelative(0.707F, -2.121F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(4.985F, 4.983F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          lineToRelative(4.985F, -4.983F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.023F, 0.0F, -1.414F)
          lineTo(8.692F, 2.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(2.293F, 7.276F)
          close()        
      }
    }
    return _diamond16!!
  }

private var _diamond16: ImageVector? = null
