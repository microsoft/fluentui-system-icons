package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Sim24: ImageVector
  get() {
    if (_sim24 != null) {
      return _sim24!!
    }
    _sim24 = fluentIcon(name = "Filled.Sim24", 24f) {
      materialPath {
          moveTo(4.0F, 5.25F)
          curveTo(4.0F, 3.455F, 5.455F, 2.0F, 7.25F, 2.0F)
          horizontalLineToRelative(5.464F)
          curveToRelative(0.862F, 0.0F, 1.69F, 0.342F, 2.299F, 0.952F)
          lineToRelative(4.035F, 4.035F)
          curveTo(19.658F, 7.597F, 20.0F, 8.424F, 20.0F, 9.286F)
          verticalLineToRelative(9.464F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-9.5F)
          curveTo(5.455F, 22.0F, 4.0F, 20.545F, 4.0F, 18.75F)
          verticalLineTo(5.25F)
          close()
          moveTo(7.75F, 14.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(-3.25F)
          horizontalLineTo(9.25F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(14.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(15.5F)
          horizontalLineTo(7.75F)
          close()
          moveToRelative(5.75F, 2.75F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(13.5F)
          verticalLineToRelative(7.5F)
          close()        
      }
    }
    return _sim24!!
  }

private var _sim24: ImageVector? = null
