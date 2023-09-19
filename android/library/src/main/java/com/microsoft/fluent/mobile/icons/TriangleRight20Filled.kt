package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleRight20: ImageVector
  get() {
    if (_triangleRight20 != null) {
      return _triangleRight20!!
    }
    _triangleRight20 = fluentIcon(name = "Filled.TriangleRight20", 20f) {
      materialPath {
          moveTo(17.215F, 8.68F)
          curveToRelative(1.047F, 0.568F, 1.047F, 2.07F, 0.0F, 2.638F)
          lineToRelative(-11.999F, 6.5F)
          curveToRelative(-1.0F, 0.541F, -2.214F, -0.183F, -2.214F, -1.32F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -1.137F, 1.215F, -1.86F, 2.214F, -1.32F)
          lineToRelative(11.999F, 6.5F)
          close()        
      }
    }
    return _triangleRight20!!
  }

private var _triangleRight20: ImageVector? = null
