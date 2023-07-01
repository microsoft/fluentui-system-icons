package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home24: ImageVector
  get() {
    if (_home24 != null) {
      return _home24!!
    }
    _home24 = fluentIcon(name = "Filled.Home24", 24f) {
      materialPath {
          moveTo(13.45F, 2.533F)
          curveToRelative(-0.837F, -0.707F, -2.063F, -0.707F, -2.9F, 0.0F)
          lineTo(3.8F, 8.228F)
          curveTo(3.291F, 8.655F, 3.0F, 9.284F, 3.0F, 9.948F)
          verticalLineToRelative(9.305F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(15.25F)
          curveToRelative(0.0F, -0.68F, 0.542F, -1.232F, 1.217F, -1.25F)
          horizontalLineToRelative(2.566F)
          curveToRelative(0.675F, 0.018F, 1.217F, 0.57F, 1.217F, 1.25F)
          verticalLineToRelative(4.003F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(9.947F)
          curveToRelative(0.0F, -0.662F, -0.292F, -1.292F, -0.8F, -1.72F)
          lineToRelative(-6.75F, -5.694F)
          close()        
      }
    }
    return _home24!!
  }

private var _home24: ImageVector? = null
