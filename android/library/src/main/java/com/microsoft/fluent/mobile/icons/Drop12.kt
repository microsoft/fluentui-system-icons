package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Drop12: ImageVector
  get() {
    if (_drop12 != null) {
      return _drop12!!
    }
    _drop12 = fluentIcon(name = "Regular.Drop12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveToRelative(0.133F, 0.0F, 0.26F, 0.053F, 0.354F, 0.147F)
          curveTo(6.61F, 1.404F, 7.387F, 2.18F, 8.1F, 3.218F)
          curveTo(8.806F, 4.244F, 9.5F, 5.597F, 9.5F, 7.0F)
          curveToRelative(0.0F, 1.337F, -0.36F, 2.352F, -1.019F, 3.035F)
          curveTo(7.821F, 10.718F, 6.928F, 11.0F, 6.0F, 11.0F)
          curveToRelative(-0.928F, 0.0F, -1.822F, -0.282F, -2.481F, -0.965F)
          curveTo(2.86F, 9.352F, 2.5F, 8.337F, 2.5F, 7.0F)
          curveToRelative(0.0F, -1.403F, 0.694F, -2.756F, 1.4F, -3.783F)
          curveToRelative(0.714F, -1.038F, 1.49F, -1.814F, 1.745F, -2.07F)
          horizontalLineToRelative(0.002F)
          curveTo(5.74F, 1.052F, 5.866F, 1.0F, 6.0F, 1.0F)
          close()
          moveToRelative(0.0F, 1.216F)
          curveTo(5.662F, 2.574F, 5.179F, 3.123F, 4.724F, 3.783F)
          curveTo(4.056F, 4.756F, 3.5F, 5.903F, 3.5F, 7.0F)
          curveToRelative(0.0F, 1.163F, 0.311F, 1.898F, 0.739F, 2.34F)
          curveTo(4.665F, 9.782F, 5.27F, 10.0F, 6.0F, 10.0F)
          curveToRelative(0.729F, 0.0F, 1.335F, -0.218F, 1.761F, -0.66F)
          curveTo(8.19F, 8.898F, 8.5F, 8.163F, 8.5F, 7.0F)
          curveToRelative(0.0F, -1.097F, -0.556F, -2.244F, -1.224F, -3.217F)
          curveTo(6.82F, 3.123F, 6.338F, 2.574F, 6.0F, 2.216F)
          close()        
      }
    }
    return _drop12!!
  }

private var _drop12: ImageVector? = null
