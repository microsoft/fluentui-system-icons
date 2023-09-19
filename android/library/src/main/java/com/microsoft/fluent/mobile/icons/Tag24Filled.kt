package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tag24: ImageVector
  get() {
    if (_tag24 != null) {
      return _tag24!!
    }
    _tag24 = fluentIcon(name = "Filled.Tag24", 24f) {
      materialPath {
          moveTo(19.75F, 2.0F)
          curveTo(20.992F, 2.0F, 22.0F, 3.007F, 22.0F, 4.25F)
          verticalLineToRelative(5.462F)
          curveToRelative(0.0F, 0.862F, -0.343F, 1.688F, -0.952F, 2.298F)
          lineToRelative(-8.5F, 8.503F)
          curveToRelative(-1.27F, 1.267F, -3.326F, 1.268F, -4.597F, 0.001F)
          lineTo(3.489F, 16.06F)
          curveToRelative(-1.27F, -1.268F, -1.272F, -3.326F, -0.004F, -4.596F)
          lineToRelative(8.5F, -8.51F)
          curveTo(12.595F, 2.343F, 13.422F, 2.0F, 14.285F, 2.0F)
          horizontalLineToRelative(5.465F)
          close()
          moveTo(17.0F, 5.502F)
          curveToRelative(-0.829F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, 0.671F, 1.5F, 1.5F, 1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          close()        
      }
    }
    return _tag24!!
  }

private var _tag24: ImageVector? = null
