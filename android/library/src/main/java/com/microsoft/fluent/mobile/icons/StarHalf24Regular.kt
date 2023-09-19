package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarHalf24: ImageVector
  get() {
    if (_starHalf24 != null) {
      return _starHalf24!!
    }
    _starHalf24 = fluentIcon(name = "Regular.StarHalf24", 24f) {
      materialPath {
          moveTo(12.0F, 2.35F)
          curveToRelative(-0.482F, 0.0F, -0.964F, 0.25F, -1.212F, 0.752F)
          lineTo(8.43F, 7.88F)
          lineTo(3.157F, 8.646F)
          curveToRelative(-1.107F, 0.16F, -1.55F, 1.522F, -0.748F, 2.303F)
          lineToRelative(3.815F, 3.719F)
          lineToRelative(-0.9F, 5.25F)
          curveToRelative(-0.15F, 0.874F, 0.544F, 1.583F, 1.331F, 1.582F)
          curveToRelative(0.208F, 0.0F, 0.422F, -0.05F, 0.63F, -0.158F)
          lineToRelative(4.714F, -2.479F)
          lineToRelative(4.715F, 2.479F)
          curveToRelative(0.99F, 0.52F, 2.148F, -0.32F, 1.96F, -1.423F)
          lineToRelative(-0.902F, -5.251F)
          lineToRelative(3.816F, -3.72F)
          curveToRelative(0.8F, -0.78F, 0.359F, -2.141F, -0.748F, -2.302F)
          lineTo(15.567F, 7.88F)
          lineToRelative(-2.358F, -4.778F)
          curveToRelative(-0.247F, -0.501F, -0.729F, -0.752F, -1.21F, -0.752F)
          close()
          moveToRelative(0.0F, 14.993F)
          verticalLineTo(4.042F)
          lineToRelative(2.257F, 4.572F)
          curveToRelative(0.196F, 0.399F, 0.577F, 0.675F, 1.016F, 0.739F)
          lineToRelative(5.05F, 0.734F)
          lineToRelative(-3.654F, 3.562F)
          curveToRelative(-0.318F, 0.31F, -0.463F, 0.757F, -0.388F, 1.195F)
          lineToRelative(0.862F, 5.029F)
          lineToRelative(-4.516F, -2.375F)
          curveToRelative(-0.197F, -0.103F, -0.412F, -0.155F, -0.627F, -0.155F)
          close()        
      }
    }
    return _starHalf24!!
  }

private var _starHalf24: ImageVector? = null
