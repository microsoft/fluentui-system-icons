package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagOff24: ImageVector
  get() {
    if (_tagOff24 != null) {
      return _tagOff24!!
    }
    _tagOff24 = fluentIcon(name = "Filled.TagOff24", 24f) {
      materialPath {
          moveTo(16.0F, 17.06F)
          lineToRelative(4.72F, 4.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.722F, 4.723F)
          lineToRelative(-3.456F, 3.46F)
          curveToRelative(-1.268F, 1.27F, -1.266F, 3.328F, 0.004F, 4.596F)
          lineToRelative(4.462F, 4.455F)
          curveToRelative(1.27F, 1.267F, 3.327F, 1.266F, 4.596F, -0.001F)
          lineTo(16.0F, 17.06F)
          close()
          moveToRelative(5.05F, -5.05F)
          lineTo(18.06F, 15.0F)
          lineTo(9.002F, 5.94F)
          lineToRelative(2.984F, -2.988F)
          curveTo(12.596F, 2.343F, 13.423F, 2.0F, 14.286F, 2.0F)
          horizontalLineToRelative(5.465F)
          curveTo(20.993F, 2.0F, 22.0F, 3.007F, 22.0F, 4.25F)
          verticalLineToRelative(5.462F)
          curveToRelative(0.0F, 0.862F, -0.343F, 1.688F, -0.952F, 2.298F)
          close()
          moveTo(17.0F, 5.502F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, 0.672F, 1.5F, 1.5F, 1.5F)
          curveToRelative(0.83F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.67F, -1.5F, -1.5F, -1.5F)
          close()        
      }
    }
    return _tagOff24!!
  }

private var _tagOff24: ImageVector? = null
