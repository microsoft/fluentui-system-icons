package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowOutlineUpRight20: ImageVector
  get() {
    if (_arrowOutlineUpRight20 != null) {
      return _arrowOutlineUpRight20!!
    }
    _arrowOutlineUpRight20 = fluentIcon(name = "Filled.ArrowOutlineUpRight20", 20f) {
      materialPath {
          moveTo(16.334F, 2.01F)
          curveToRelative(0.955F, -0.107F, 1.763F, 0.7F, 1.656F, 1.656F)
          lineToRelative(-1.078F, 9.703F)
          curveToRelative(-0.139F, 1.25F, -1.662F, 1.784F, -2.551F, 0.895F)
          lineToRelative(-1.068F, -1.067F)
          lineTo(8.93F, 17.56F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          lineToRelative(-4.37F, -4.37F)
          curveToRelative(-0.587F, -0.585F, -0.587F, -1.535F, 0.0F, -2.121F)
          lineToRelative(4.362F, -4.363F)
          lineToRelative(-1.067F, -1.067F)
          curveTo(4.846F, 4.749F, 5.38F, 3.226F, 6.63F, 3.087F)
          lineToRelative(9.704F, -1.078F)
          close()        
      }
    }
    return _arrowOutlineUpRight20!!
  }

private var _arrowOutlineUpRight20: ImageVector? = null
